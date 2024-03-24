import React from 'react'
import { lusitana } from '@/app/ui/fonts';
import {fetchAllCustomers} from '@/app/lib/data'
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { Suspense } from 'react';

export default async function page() {

  const customers = await fetchAllCustomers();
  // console.log(customers)

  return (
    <div className="w-full">
    {/* <div className="mt-4 flex items-center justify-between gap-2 md:mt-8"> */}
      {/* <Search placeholder="Search customers..." /> */}
      {/* <CreateInvoice /> */}
    {/* </div> */}
    <Suspense fallback={<div>loading...</div>}>
      <Table customers={customers}/>
    </Suspense>
    <div className="mt-5 flex w-full justify-center">
      {/* <Pagination totalPages={totalPages} /> */}
    </div>
  </div>
  )
}
