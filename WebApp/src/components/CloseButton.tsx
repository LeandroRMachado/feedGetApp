import { X } from "phosphor-react";
import { Popover } from '@headlessui/react'

export function CloseButton() {
  return(
    <Popover.Button title="Fechar formulário de feedback" className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100">
      <X 
        className="w-4 h-4"
        weight="bold"
      />
    </Popover.Button>
  );
}