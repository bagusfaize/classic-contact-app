'use client'
import { useEffect } from "react";
import { setContactState } from "@/app/store/slices/contactSlices";
import { useAppDispatch, useAppSelector } from "./store/store";
import { ContactProps } from "@/app/types/type";
import { Col, Row } from "antd";
import ContactCard from "./components/ContactCard";
import Navigation from "./components/Navigation";

export default function Home() {
  const contactState = useAppSelector(state => state.contact.contacts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setContact(data)
      })
  }, [])

  const setContact = (data: Array<ContactProps>) => {
    dispatch(setContactState(data));
  }

  return (
    <main className="p-10 bg-slate-100 min-h-screen">
      <Navigation/>
      <div className="py-10">
        <Row gutter={[20, 20]}>
          {contactState.map(item => {
            return (
              <Col key={item.id} xs={24} sm={12} md={6}>
                <ContactCard
                  contact={item}
                />
              </Col>
            )
          })}
        </Row>
      </div>
    </main>
  );
}
