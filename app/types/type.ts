export type ContactProps = {
    id: number | null,
    name: string,
    username: string,
    email: string,
}

export interface ContactInterface {
  contacts: Array<ContactProps>
}