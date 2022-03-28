#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[brush::contract]
pub mod my_psp22_facet {
    use brush::{
        contracts::{
            ownable::*,
            psp22::*,
        },
        modifiers,
    };
    use ink_storage::traits::SpreadAllocate;

    #[ink(storage)]
    #[derive(Default, SpreadAllocate, PSP22Storage, OwnableStorage)]
    pub struct PSP22Facet {
        #[PSP22StorageField]
        psp22: PSP22Data,
        #[OwnableStorageField]
        ownable: OwnableData,
    }

    impl PSP22 for PSP22Facet {}

    impl Ownable for PSP22Facet {}

    impl PSP22Facet {
        #[ink(constructor)]
        pub fn new() -> Self {
            ink_lang::codegen::initialize_contract(|instance: &mut PSP22Facet| {
                instance._init_with_owner(instance.env().caller());
                instance.init_psp22().expect("Should initialize");
            })
        }

        #[ink(message)]
        #[modifiers(only_owner)]
        pub fn init_psp22(&mut self) -> Result<(), PSP22Error> {
            self._mint(Self::env().caller(), 1000)
        }
    }
}