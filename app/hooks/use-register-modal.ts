import {create} from 'zustand'

type RegisterModalStoreType = {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

export const useRegisterModal = create<RegisterModalStoreType>((set) => ({
	isOpen: false,
	onOpen: () => set({isOpen: true}),
	onClose: () => set({isOpen: false}),
}))