import { Tabs, TabsTrigger } from "@radix-ui/react-tabs";
import Victory from "../../assets/victory.svg";
import { apiClient } from "@/lib/api-client";
import Background from "../../assets/Login2.png";
import { TabsContent, TabsList } from "@/components/ui/tabs";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/utils/constants";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setConfirmPassword] = useState("");

  const validateLogin = () => {
    if (!email.length) {
      toast.error("Please enter email");
      return false;
    }
    if (!password.length) {
      toast.error("Please enter password");
      return false;
    }
    return true;
  };
  const validateSignup = () => {
    if (!email.length) {
      toast.error("Please enter email");
      return false;
    }
    if (!password.length) {
      toast.error("Please enter password");
      return false;
    }
    if (password !== comfirmPassword) {
      toast.error("password and confirm password must be the same ");
      return false;
    }
    return true;
  };
  const handleLogin = async () => {
    if (validateLogin()) {
      const response = await apiClient.post(
        LOGIN_ROUTE,
        { email, password },
        { withCredentials: true }
      );
      console.log({ response });
    }
  };
  const handleSignup = async () => {
    if (validateSignup()) {
      const response = await apiClient.post(
        SIGNUP_ROUTE,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log({ response });
    }
  };
  return (
    <div className="h-[100vh] w-[100hw] flex items-center justify-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2 ">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <img src={Victory} alt="Victory" className="h-[100px]" />
            </div>
            <p className="font-medium text-center">
              {" "}
              Fill the detils to get started with the best chat app!
            </p>
            <div className="flex items-center justify-center w-full">
              <Tabs className="w-3/4">
                <TabsList className="bg-transparent rounded-none w-full">
                  <TabsTrigger
                    value="login"
                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                  >
                    Login
                  </TabsTrigger>

                  <TabsTrigger
                    value="signup"
                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                  >
                    Sign up
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="flex flex-col gap-5 mt-10"
                  value="login"
                >
                  <Input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="p-6 rounded-full"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="p-6 rounded-full"
                  />
                  <Button className="rounded-full p-6" onClick={handleLogin}>
                    Submit
                  </Button>
                </TabsContent>

                <TabsContent
                  className="flex flex-col gap-5 mt-10"
                  value="signup"
                >
                  <Input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="p-6 rounded-full"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="p-6 rounded-full"
                  />
                  <Input
                    type="password"
                    placeholder="ConfirmPassword"
                    value={comfirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    className="p-6 rounded-full"
                  />
                  <Button className="rounded-full p-6" onClick={handleSignup}>
                    Submit
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="hidden sm:felx justify-center  items-center">
            <img
              src={Background}
              alt="back ground image"
              className="h-[700px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
