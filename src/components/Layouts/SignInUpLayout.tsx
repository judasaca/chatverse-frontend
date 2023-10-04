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

export interface FormData {
  username: string;
  password: string;
}

interface SignInUpLayoutProps {
  heading: string;
  btnText: string;
  dataShapeObj: FormData;
  authFn: () => boolean;
  // setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const SignInUpLayout = ({
  heading,
  btnText,
  dataShapeObj,
  authFn,
}: SignInUpLayoutProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>(dataShapeObj);

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
        <FormControl paddingBottom={3}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            type="username"
            name="username"
            id="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl paddingBottom={3}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button
          colorScheme="pink"
          width="100%"
          onClick={async () => {
            const success = authFn();
            if (success) navigate("/chats");
          }}
          marginTop={5}
        >
          {btnText}
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignInUpLayout;
