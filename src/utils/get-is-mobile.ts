
import { headers } from "next/headers";
const getIsMobile = async () => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";

  const isMobile =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  return isMobile;
}

export default getIsMobile