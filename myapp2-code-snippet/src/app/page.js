import {Button} from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {Input} from '@/components/ui/input'

export default function Home() {
  return (
   <div className="h-full w-full px-25 pt-10 bg-amber-50 flex flex-col items-center">
  
  <div>
    <h1 className="text-4xl font-bold">CODE SNIPPET</h1>
  </div>

  <div className="flex justify-between w-full mt-6">
    <h1 className="font-bold text-2xl">HOME</h1>
    <Button className="p-4 font-bold">Create New</Button>
  </div>

</div>
  );
}
