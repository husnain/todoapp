import {formatDate} from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default async function View( {todo} : {todo: TodoItem} ) {

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger>Task</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <form action={async () => {} } method="post">
            <label>Task</label>
            <input type="text" name="task" />
            <label>Description</label>
            <input type="text" name="description" />
            <button type="submit">Create</button>
            </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}