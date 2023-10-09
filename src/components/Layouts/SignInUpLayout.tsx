import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import styles from "./signInOutLayout.module.css";
import { useState } from "react";

export interface IFormData {
  password: string;
  email: string;
  token?: string;
}

export interface ISignup extends IFormData {
  username: string;
}

interface SignInUpLayoutProps {
  heading: string;
  btnText: string;
  dataShapeObj: IFormData;
  authFn: (arg: IFormData) => Promise<boolean>;
  // setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const SignInUpLayout = ({
  heading,
  btnText,
  dataShapeObj,
  authFn,
}: SignInUpLayoutProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IFormData>({
    ...dataShapeObj,
    email: dataShapeObj.email || "",
    password: dataShapeObj.password || "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Flex height="90vh" className={styles.flexColumnCenter}>
      <Flex className={`${styles.flexColumnCenter} ${styles.container}`}>
        <Flex className={styles.flexColumnCenter} gap={2}>
          <Heading as="h2" fontSize="40px" textAlign="center">
            {heading}
          </Heading>
          <Text>to</Text>
          <Heading
            as="h2"
            fontSize="20px"
            textAlign="center"
            paddingBottom={10}
          >
            chatverse
          </Heading>
        </Flex>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const success = await authFn({
              email: formData.email,
              password: formData.password,
            });
            if (success) navigate("/chats");
          }}
        >
          <FormControl paddingBottom={3}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl paddingBottom={3}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="pink" width="100%" marginTop={5}>
            {btnText}
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default SignInUpLayout;
