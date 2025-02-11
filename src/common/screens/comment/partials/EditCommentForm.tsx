import { useEditCommentForm } from "./useEditCommentForm";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Controller } from "react-hook-form";
import {
  SelectValue,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { DevTool } from "@hookform/devtools";

export const EditCommentForm = () => {
  const { handleSubmit, onSubmit, control } = useEditCommentForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 m-auto"
    >
      <DevTool control={control} />
      <Controller
        name="id"
        control={control}
        render={({ field }) => (
          <Input {...field} type="number" placeholder="Id" disabled />
        )}
      />
      <Controller
        name="tittle"
        control={control}
        render={({ field }) => (
          <Input {...field} type="text" placeholder="Title" />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            placeholder="Type your Description here."
            className="md:col-span-2"
          />
        )}
      />
      <Controller
        name="userLogo"
        control={control}
        render={({ field }) => (
          <Input {...field} type="file" accept=".webp , .jpg, .png" />
        )}
      />
      <Controller
        name="feel"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="How Do you feel about it?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="LOVEIT">LOVE IT</SelectItem>
                <SelectItem value="HATEIT">HATE IT</SelectItem>
                <SelectItem value="NEUTRAL">NEUTRAL</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
    </form>
  );
};
