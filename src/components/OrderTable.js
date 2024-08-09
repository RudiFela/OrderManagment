"use client";

import { Table, Badge } from "flowbite-react";
import OrderForm from "./OrderForm";
import OrderModal from "./OrderModal";
import TableHeader from "./TableHeader";
const DATA = [
  {
    id: "2",
    status: 1,
    progress: 1,
    deliveryType: 4,
    description: "opis testowy",
    orderEmail: "kamil@gmail.com",
    price: 28699,
    pieces: 2,
    finalDate: new Date("2022-03-25"),
    deliveryAdress: "testowy adress",
    invoiceAdress: "adres do faktury",
  },
  {
    id: "1",
    status: 2,
    progress: 1,
    deliveryType: 1,
    description: "opis testowy",
    orderEmail: "kamil@gmail.com",
    price: 28699,
    pieces: 2,
    finalDate: new Date("2023-03-25"),
    deliveryAdress: "testowy adress",
    invoiceAdress: "adres do faktury",
  },
  {
    id: "3",
    status: 3,
    progress: 1,
    deliveryType: 4,
    description: "opis testowy",
    orderEmail: "kamil@gmail.com",
    price: 28699,
    pieces: 2,
    finalDate: "2024-07-05T14:48:00.000Z",
    deliveryAdress: "testowy adress",
    invoiceAdress: "adres do faktury",
  },
  {
    id: "4",
    status: 4,
    progress: 3,
    deliveryType: 1,
    description: "opis testowy",
    orderEmail: "kamil@gmail.com",
    price: 28699,
    pieces: 2,
    finalDate: "2024-07-05T14:48:00.000Z",
    deliveryAdress: "testowy adress",
    invoiceAdress: "adres do faktury",
  },
  {
    id: "5",
    status: 5,
    progress: 2,
    deliveryType: 2,
    description: "opis testowy",
    orderEmail: "kamil@gmail.com",
    price: 28699,
    pieces: 2,
    finalDate: "2024-07-05T14:48:00.000Z",
    deliveryAdress: "testowy adress",
    invoiceAdress: "adres do faktury",
  },
  {
    id: "6",
    status: 6,
    progress: 1,
    deliveryType: 3,
    description: "opis testowy",
    orderEmail: "kamil@gmail.com",
    price: 28699,
    pieces: 2,
    finalDate: "2024-07-05T14:48:00.000Z",
    deliveryAdress: "testowy adress",
    invoiceAdress: "adres do faktury",
  },
  {
    id: "7",
    status: 7,
    progress: 1,
    deliveryType: 4,
    description: "opis testowy",
    orderEmail: "kamil@gmail.com",
    price: 28699,
    pieces: 2,
    finalDate: "2024-07-05T14:48:00.000Z",
    deliveryAdress: "testowy adress",
    invoiceAdress: "adres do faktury",
  },
  {
    id: "8",
    status: 8,
    progress: 1,
    deliveryType: 4,
    description: "opis testowy",
    orderEmail: "kamil@gmail.com",
    price: 28699,
    pieces: 2,
    finalDate: "2024-07-05T14:48:00.000Z",
    deliveryAdress: "testowy adress",
    invoiceAdress: "adres do faktury",
  },
  {
    id: "9",
    status: 9,
    progress: 1,
    deliveryType: 2,
    description: "opis testowy",
    orderEmail: "kamil@gmail.com",
    price: 28699,
    pieces: 2,
    finalDate: "2024-07-05T14:48:00.000Z",
    deliveryAdress: "testowy adress2",
    invoiceAdress: "adres do faktury",
  },
];
export default function OrderTable() {
  const statusCheck = (status) => {
    switch (status) {
      case 1:
        return <Badge color="red">Nowy</Badge>;
      case 2:
        return <Badge color="yellow">Rysowanie/Wypalanie</Badge>;
      case 3:
        return <Badge color="purple">Zagniatarka</Badge>;
      case 4:
        return <Badge color="pink">Składanie</Badge>;
      case 5:
        return <Badge color="gray">Spawanie</Badge>;
      case 6:
        return <Badge color="blue">Magazyn(u Basi)</Badge>;
      case 7:
        return <Badge color="lime">Montaz lamp/wentylacji</Badge>;
      case 8:
        return <Badge color="indigo">Pakowanie</Badge>;
      case 9:
        return <Badge color="green">Gotowe do wysyłki</Badge>;
    }
  };
  const progressCheck = (status) => {
    switch (status) {
      case 1:
        return <Badge color="yellow">Oczekuje</Badge>;
      case 2:
        return <Badge color="blue">W Realizacji</Badge>;
      case 3:
        return <Badge color="red">Wstrzymane</Badge>;
      case 4:
        return <Badge color="pink">Składanie</Badge>;
    }
  };
  const deliveryCheck = (status) => {
    switch (status) {
      case 1:
        return <Badge color="yellow">Odbiór Osobisty</Badge>;
      case 2:
        return <Badge color="blue">Spedycja</Badge>;
      case 3:
        return <Badge color="red">Paleta</Badge>;
      case 4:
        return <Badge color="pink">Paczka</Badge>;
    }
  };

  const table = DATA.map((row) => (
    <Table.Row
      key={row.id}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell>{row.id}</Table.Cell>
      <Table.Cell>17/03/2024</Table.Cell>
      <Table.Cell>
        <div>{statusCheck(row.status)}</div>
      </Table.Cell>
      <Table.Cell>
        <div>{progressCheck(row.progress)}</div>
      </Table.Cell>
      <Table.Cell>
        <div>{deliveryCheck(row.deliveryType)}</div>
      </Table.Cell>
      <Table.Cell>
        <OrderModal buttonText="Edytuj" orderData={row} />
      </Table.Cell>
    </Table.Row>
  ));
  return (
    <>
      <div className="overflow-x-auto">
        <TableHeader />
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Data Dostarczenia</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Postęp Prac</Table.HeadCell>
            <Table.HeadCell>Rodzaj dostawy</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">{table}</Table.Body>
        </Table>
      </div>
    </>
  );
}

/*
1 Nowy
2 Rysowanie/Wypalanie
3 Zagniatarka
4 Składanie
5 Spawanie
6 Magazyn(u Basi)
7 Montaz lamp/wentylacji
8 Pakowanie
9 Gotowe do wysyłki
*/
