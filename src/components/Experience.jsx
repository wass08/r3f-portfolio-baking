import { OrbitControls } from "@react-three/drei";
import { Office } from "./Office";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} />
      <Office />
    </>
  );
};
