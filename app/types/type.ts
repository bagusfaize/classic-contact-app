export type ContactProps = {
    id: number,
    name: string,
    username: string,
    email: string,
    website: string,
    phone: string,
    address: AddressProps,
    company: CompanyProps,
}

export type AddressProps = {
  city: string,
  street?: string,
  zipcode?: string,
}

export type CompanyProps = {
  name: string,
  catchPhrase?: string,
  bs?: string,
}

export type ContactState = {
  contacts: Array<ContactProps>
}