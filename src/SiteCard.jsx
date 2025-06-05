import {
  DataList,
  Badge,
  Flex,
  Code,
  IconButton,
  Card,
} from "@radix-ui/themes";

import { CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import { api_url } from "../config";

export function SiteCard({ url }) {
  const [code, setCode] = useState("Maybe down");
  const [color, setColor] = useState("orange");

  fetch(`${api_url}/${url}`, {
    method: "HEAD",
  })
    .then((response) => {
      if (response.status == 200) {
        setCode(`Online: ${response.status}`);
        setColor("green")
      } else {
        setCode(`Down: ${response.status}`);
        setColor("red")
      }
    })
    .catch((error) => console.error("Error:", error));

  return (
    <Card>
      <DataList.Root>
        <DataList.Item align="center">
          <DataList.Label minWidth="88px">Status</DataList.Label>
          <DataList.Value>
            <Badge color={color} variant="soft" radius="full">
              {code}
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">URL</DataList.Label>
          <DataList.Value>
            <Flex align="center" gap="2">
              <Code variant="ghost">{url}</Code>
              <IconButton
                size="1"
                aria-label="Copy value"
                color="gray"
                variant="ghost"
              >
                <CopyIcon />
              </IconButton>
            </Flex>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Card>
  );
}

/*
        <DataList.Item>
          <DataList.Label minWidth="88px">Last seen: </DataList.Label>
          <DataList.Value>{time}</DataList.Value>
        </DataList.Item>
*/