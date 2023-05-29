import { useMutation } from "@tanstack/react-query";
import { Input, Grid, Button } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { instance } from "../../components/axios";
import "./main.scss";

export default function Message() {
  const { mutate } = useMutation((data) => {
    instance.post("message", { data }).then((ms) => console.log(ms));
  });

  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    mutate(data);
    console.log(data);
    reset();
  };
  return (
    <div className="message">
      <form className="forma" onSubmit={handleSubmit(onSubmit)}>
        <Grid.Container gap={4} justify="center">
          <Grid xs={12}>
            <Controller
              control={control}
              name="phone"
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <Input
                  underlined
                  labelPlaceholder="phone"
                  color="success"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid xs={12}>
            <Controller
              control={control}
              name="subject"
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <Input
                  underlined
                  labelPlaceholder="subject"
                  color="warning"
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid xs={12}>
            <Controller
              control={control}
              name="message"
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <Input
                  underlined
                  labelPlaceholder="Enter your text"
                  color="primary"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid xs={12}>
            <Button color="gradient" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid.Container>
      </form>
    </div>
  );
}
