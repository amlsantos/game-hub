import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

export const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformId,
}: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Select a platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            bgColor={
              selectedPlatformId === platform.id ? "gray.800" : undefined
            }
            isFocusable={false}
            key={platform.id}
            onClick={() => {
              onSelectPlatform(platform);
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
