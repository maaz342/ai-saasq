import { Menu } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Sidebar from './Sidebar'

const Mobilesidebar = () => {
  return (
<Sheet><SheetTrigger><Button variant="ghost" size="icon" className="md:hidden"> <Menu /> </Button></SheetTrigger>
<SheetContent side="left" className='p-0'>
    <Sidebar/>
    </SheetContent></Sheet>
  )
}

export default Mobilesidebar
