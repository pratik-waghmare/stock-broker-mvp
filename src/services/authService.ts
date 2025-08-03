import z from "zod";

export const loginUserSchema = z.object({
  username: z.email(),
  password: z.string().nonempty("Password is required"),
});

export type LoginUser = z.infer<typeof loginUserSchema>;

export const loginMockApi = async (payload: LoginUser) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        payload.username === "admin@liquide.com" &&
        payload.password === "liquide-pass"
      ) {
        resolve({
          status: 200,
          data: {
            username: payload.username,
            name: payload.username.split("@")[0],
          },
          message: "Logged in successfully!",
        });
      } else if (
        payload.username === "admin@liquide.com" &&
        payload.password !== "liquide-pass"
      ) {
        reject({ status: 400, message: "Invalid credentials" });
      } else {
        reject({ status: 500, message: "Internal server error" });
      }
    }, 1000);
  });
};
