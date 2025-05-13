"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import "./form.css";

type DemoFormValues = {
  name: string;
};

type FormDemoProps = {
  defaultName?: string;
  label?: string;
  placeholder?: string;
  description?: string;
};

export function FormDemo({
  defaultName = "",
  label = "Name",
  placeholder = "Your name",
  description = "This is your display name.",
}: FormDemoProps) {
  const form = useForm<DemoFormValues>({
    defaultValues: {
      name: defaultName,
    },
    mode: "onTouched",
  });

  const onSubmit = (values: DemoFormValues) => {
    alert(JSON.stringify(values));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="form-wrapper">
        <FormField
          control={form.control}
          name="name"
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input placeholder={placeholder} {...field} />
              </FormControl>
              <FormDescription>{description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </Form>
  );
}
