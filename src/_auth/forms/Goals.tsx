
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

 
const items = [
  {
    id: "weightloss",
    label: "Weigth Loss",
  },
  {
    id: "musclegain",
    label: "Muscle Gain",
  },
  {
    id: "flexibility",
    label: "Flexibility and Mobility",
  },
  {
    id: "general",
    label: "General Fitness",
  },
  {
    id: "event",
    label: "Event - specific training",
  },
  {
    id: "mindfulness",
    label: "Mindfulness and Mental Health",
  },
] as const
 
const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})
 
export default function Goals() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }


  return (
    <div className=" justify-center items-center h-screen w-auto">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-12" >
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4 p-8 ">
                <FormLabel className="base-semibold lg:xl ">What are your goals?</FormLabel>
                <FormDescription>
                  Select the goals you want to achive.
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow gap-10 bg-zinc-100"
                      >
                        <FormControl className="p-1 ">
                          <Checkbox
                            className="bg-white items-center " 
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal ">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button  type="submit" className="shad-button_primary w-full">Confirm</Button>
      </form>
    </Form>
    </div>
  )
}

