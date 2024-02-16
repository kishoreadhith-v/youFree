"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Input,
  Button,
} from "@nextui-org/react";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:3000/register";

  const apicall = async () => {
    try {
      const data = {
        username: username,
        password: password,
      };
      axios
        .post(url, data)
        .then((res) => {
          if (res.data.status === 200) {
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8">
      <Card className="w-[full] md:w-[500px]">
        <CardHeader className="flex justify-center">
          <p className="text-md">Signup</p>
        </CardHeader>
        <Divider />
        <CardBody className="py-8">
          <div className="flex flex-col items-center gap-3">
            <Input
              type="text"
              label="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="passsword"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="mt-5 bg-gradient-to-b from-red-900 via-orange-400  to-amber-700">
            Signup
          </Button>
        </CardBody>
        <Divider />
        <CardFooter className="inline-block w-full justify-center text-center">
          <p>Already have an account? </p>
          <Link href="/signin" showAnchorIcon>
            Signin
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
