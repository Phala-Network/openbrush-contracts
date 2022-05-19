// Copyright (c) 2012-2022 Supercolony
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the"Software"),
// to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#![feature(min_specialization)]
#[cfg(feature = "psp35")]
#[brush::contract]
mod psp35_batch {
    use brush::test_utils::{
        accounts,
        change_caller,
    };
    use contracts::psp35::extensions::batch::*;
    use ink::codegen::{
        EmitEvent,
        Env,
    };
    use ink_lang as ink;
    use ink_storage::traits::SpreadAllocate;

    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Option<AccountId>,
        #[ink(topic)]
        to: Option<AccountId>,
        id: Id,
        value: Balance,
    }

    #[ink(event)]
    pub struct TransferBatch {
        #[ink(topic)]
        from: Option<AccountId>,
        #[ink(topic)]
        to: Option<AccountId>,
        ids_amounts: Vec<(Id, Balance)>,
    }

    #[ink(event)]
    pub struct Approval {
        #[ink(topic)]
        owner: AccountId,
        #[ink(topic)]
        operator: AccountId,
        id: Option<Id>,
        value: Balance,
    }

    #[derive(Default, SpreadAllocate, PSP35Storage)]
    #[ink(storage)]
    pub struct PSP35Struct {
        #[PSP35StorageField]
        psp35: PSP35Data,
    }

    impl PSP35Internal for PSP35Struct {
        fn _emit_approval_event(&self, _owner: AccountId, _operator: AccountId, _id: Option<Id>, _value: Balance) {
            self.env().emit_event(Approval {
                owner: _owner,
                operator: _operator,
                id: _id,
                value: _value,
            });
        }

        fn _emit_transfer_batch_event(
            &self,
            _from: Option<AccountId>,
            _to: Option<AccountId>,
            _ids_amounts: Vec<(Id, Balance)>,
        ) {
            self.env().emit_event(TransferBatch {
                from: _from,
                to: _to,
                ids_amounts: _ids_amounts,
            });
        }

        // Don't do cross call in test
        fn _do_safe_transfer_check(
            &mut self,
            _operator: &AccountId,
            _from: &AccountId,
            _to: &AccountId,
            _ids_amounts: &Vec<(Id, Balance)>,
            _data: &Vec<u8>,
        ) -> Result<(), PSP35Error> {
            Ok(())
        }
    }

    impl PSP35 for PSP35Struct {}

    impl PSP35Batch for PSP35Struct {}

    impl PSP35Struct {
        #[ink(constructor)]
        pub fn new() -> Self {
            ink_lang::codegen::initialize_contract(|_instance: &mut PSP35Struct| {})
        }

        #[ink(message)]
        pub fn mint(&mut self, acc: AccountId, id: Id, amount: Balance) -> Result<(), PSP35Error> {
            self._mint_to(acc, vec![(id, amount)])
        }
    }

    type Event = <PSP35Struct as ::ink_lang::reflect::ContractEventBase>::Type;

    #[ink::test]
    fn transfer_batch_from() {
        let token_id_1 = [1; 32];
        let token_id_2 = [2; 32];
        let token_1_amount = 1;
        let token_2_amount = 20;
        let ids_amount = vec![(token_id_1, token_1_amount), (token_id_2, token_2_amount)];
        let amounts = vec![token_1_amount, token_2_amount];
        let accounts = accounts();
        // Create a new contract instance.
        let mut nft = PSP35Struct::new();
        assert!(nft.mint(accounts.alice, token_id_1, token_1_amount).is_ok());
        assert!(nft.mint(accounts.alice, token_id_2, token_2_amount).is_ok());

        assert_eq!(nft.balance_of(accounts.bob, token_id_1), 0);
        assert_eq!(nft.balance_of(accounts.bob, token_id_2), 0);

        assert_eq!(nft.balance_of(accounts.alice, token_id_1), amounts[0]);
        assert_eq!(nft.balance_of(accounts.alice, token_id_2), amounts[1]);

        assert!(nft
            .transfer_batch_from(accounts.alice, accounts.bob, ids_amount.clone(), vec![])
            .is_ok());

        assert_eq!(nft.balance_of(accounts.bob, token_id_1), amounts[0]);
        assert_eq!(nft.balance_of(accounts.bob, token_id_2), amounts[1]);

        assert_eq!(nft.balance_of(accounts.alice, token_id_1), 0);
        assert_eq!(nft.balance_of(accounts.alice, token_id_2), 0);

        // EVENTS ASSERTS
        let mut events_iter = ink_env::test::recorded_events();
        let emmited_event = events_iter.next().unwrap();
        assert_transfer_event(emmited_event, None, Some(accounts.alice), token_id_1, token_1_amount);

        let emmited_event = events_iter.next().unwrap();
        assert_transfer_event(emmited_event, None, Some(accounts.alice), token_id_2, token_2_amount);

        let emmited_event = events_iter.next().unwrap();
        assert_transfer_batch_event(emmited_event, Some(accounts.alice), Some(accounts.bob), &ids_amount);

        assert_eq!(ink_env::test::recorded_events().count(), 3);
    }

    #[ink::test]
    fn transfer_batch_from_insufficient_balance() {
        let token_id_1 = [1; 32];
        let token_id_2 = [2; 32];
        let token_1_amount = 1;
        let token_2_amount = 20;
        let ids_amounts = vec![(token_id_1, 2), (token_id_2, 21)];
        let accounts = accounts();
        // Create a new contract instance.
        let mut nft = PSP35Struct::new();
        assert!(nft.mint(accounts.alice, token_id_1, token_1_amount).is_ok());
        assert!(nft.mint(accounts.alice, token_id_2, token_2_amount).is_ok());
        assert_eq!(
            nft.transfer_batch_from(accounts.alice, accounts.bob, ids_amounts, vec![]),
            Err(PSP35Error::InsufficientBalance),
        );
    }

    #[ink::test]
    fn transfer_batch_from_no_approve() {
        let token_id_1 = [1; 32];
        let token_id_2 = [2; 32];
        let token_1_amount = 1;
        let token_2_amount = 20;
        let ids_amounts = vec![(token_id_1, token_1_amount), (token_id_2, token_2_amount)];
        let accounts = accounts();
        // Create a new contract instance.
        let mut nft = PSP35Struct::new();
        assert!(nft.mint(accounts.bob, token_id_1, token_1_amount).is_ok());
        assert!(nft.mint(accounts.bob, token_id_2, token_2_amount).is_ok());

        assert_eq!(
            nft.transfer_batch_from(accounts.bob, accounts.alice, ids_amounts, vec![]),
            Err(PSP35Error::NotAllowed)
        );
    }

    #[ink::test]
    fn transfer_batch_from_partial_approve() {
        let token_id_1 = [1; 32];
        let token_id_2 = [2; 32];
        let token_1_amount = 1;
        let token_2_amount = 20;
        let ids_amounts = vec![(token_id_1, token_1_amount), (token_id_2, token_2_amount)];
        let accounts = accounts();

        let mut nft = PSP35Struct::new();
        assert!(nft.mint(accounts.bob, token_id_1, token_1_amount).is_ok());
        assert!(nft.mint(accounts.bob, token_id_2, token_2_amount).is_ok());

        assert!(nft.approve(accounts.bob, Some((token_id_2, 10))).is_ok());

        assert_eq!(
            nft.transfer_batch_from(accounts.bob, accounts.alice, ids_amounts.clone(), vec![]),
            Err(PSP35Error::NotAllowed)
        );

        assert!(nft.approve(accounts.bob, Some((token_id_1, 1))).is_ok());

        assert!(nft
            .transfer_batch_from(
                accounts.bob,
                accounts.alice,
                vec![(token_id_1, 1), (token_id_2, 10)],
                vec![]
            )
            .is_ok());

        assert_eq!(nft.balance_of(accounts.alice, token_id_1), 1);
        assert_eq!(nft.balance_of(accounts.alice, token_id_2), 10);
        assert_eq!(nft.balance_of(accounts.bob, token_id_1), 0);
        assert_eq!(nft.balance_of(accounts.bob, token_id_2), 10);

        assert_eq!(
            nft.transfer_batch_from(
                accounts.bob,
                accounts.alice,
                vec![(token_id_1, 0), (token_id_2, 10)],
                vec![]
            ),
            Err(PSP35Error::NotAllowed)
        );
    }

    #[ink::test]
    fn transfer_from_batch_with_approve() {
        let token_id_1 = [1; 32];
        let token_id_2 = [2; 32];
        let token_1_amount = 1;
        let token_2_amount = 20;
        let ids_amounts = vec![(token_id_1, token_1_amount), (token_id_2, token_2_amount)];
        let amounts = vec![token_1_amount, token_2_amount];
        let accounts = accounts();
        // Create a new contract instance.
        let mut nft = PSP35Struct::new();
        assert!(nft.mint(accounts.alice, token_id_1, token_1_amount).is_ok());
        assert!(nft.mint(accounts.alice, token_id_2, token_2_amount).is_ok());
        assert!(nft.approve(accounts.bob, None).is_ok());

        change_caller(accounts.bob);
        assert!(nft
            .transfer_batch_from(accounts.alice, accounts.bob, ids_amounts.clone(), vec![])
            .is_ok());

        assert_eq!(nft.balance_of(accounts.bob, token_id_1), amounts[0]);
        assert_eq!(nft.balance_of(accounts.bob, token_id_2), amounts[1]);
        assert_eq!(nft.balance_of(accounts.alice, token_id_1), 0);
        assert_eq!(nft.balance_of(accounts.alice, token_id_2), 0);

        // EVENTS ASSERTS
        let mut events_iter = ink_env::test::recorded_events();
        let emmited_event = events_iter.next().unwrap();
        assert_transfer_event(emmited_event, None, Some(accounts.alice), token_id_1, token_1_amount);

        let emmited_event = events_iter.next().unwrap();
        assert_transfer_event(emmited_event, None, Some(accounts.alice), token_id_2, token_2_amount);

        let emmited_event = events_iter.next().unwrap();
        assert_approval_event(emmited_event, accounts.alice, accounts.bob, None, Balance::MAX);

        let emmited_event = events_iter.next().unwrap();
        assert_transfer_batch_event(emmited_event, Some(accounts.alice), Some(accounts.bob), &ids_amounts);

        assert_eq!(ink_env::test::recorded_events().count(), 4);
    }

    fn assert_transfer_event(
        event: ink_env::test::EmittedEvent,
        expected_from: Option<AccountId>,
        expected_to: Option<AccountId>,
        expected_token_id: Id,
        expected_value: Balance,
    ) {
        let decoded_event = <Event as scale::Decode>::decode(&mut &event.data[..])
            .expect("encountered invalid contract event data buffer");
        if let Event::Transfer(Transfer { from, to, id, value }) = decoded_event {
            assert_eq!(from, expected_from, "encountered invalid Transfer.from");
            assert_eq!(to, expected_to, "encountered invalid Transfer.to");
            assert_eq!(id, expected_token_id, "encountered invalid Transfer.id");
            assert_eq!(value, expected_value, "encountered invalid Transfer.value");
        } else {
            panic!("encountered unexpected event kind: expected a Transfer event")
        }
    }

    fn assert_transfer_batch_event(
        event: ink_env::test::EmittedEvent,
        expected_from: Option<AccountId>,
        expected_to: Option<AccountId>,
        expected_token_ids_and_values: &[(Id, Balance)],
    ) {
        let decoded_event = <Event as scale::Decode>::decode(&mut &event.data[..])
            .expect("encountered invalid contract event data buffer");
        if let Event::TransferBatch(TransferBatch { from, to, ids_amounts }) = decoded_event {
            assert_eq!(from, expected_from, "encountered invalid TransferBatch.from");
            assert_eq!(to, expected_to, "encountered invalid TransferBatch.to");
            assert_eq!(
                ids_amounts, expected_token_ids_and_values,
                "encountered invalid TransferBatch.ids_amounts"
            );
        } else {
            panic!("encountered unexpected event kind: expected a TransferBatch event")
        }
    }

    fn assert_approval_event(
        event: ink_env::test::EmittedEvent,
        expected_owner: AccountId,
        expected_operator: AccountId,
        expected_id: Option<Id>,
        expected_value: Balance,
    ) {
        let decoded_event = <Event as scale::Decode>::decode(&mut &event.data[..])
            .expect("encountered invalid contract event data buffer");
        if let Event::Approval(Approval {
            owner,
            operator,
            id,
            value,
        }) = decoded_event
        {
            assert_eq!(owner, expected_owner, "encountered invalid Approval.owner");
            assert_eq!(operator, expected_operator, "encountered invalid Approval.to");
            assert_eq!(id, expected_id, "encountered invalid Approval.id");
            assert_eq!(value, expected_value, "encountered invalid Approval.value");
        } else {
            panic!("encountered unexpected event kind: expected a Approval event")
        }
    }
}