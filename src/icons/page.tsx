

import dynamic from "next/dynamic";
const List = dynamic(() => import(`./icons/List`));
const Cards = dynamic(() => import(`./icons/Cards`));

export const icons = {
    List,
    Cards
  };
  
  interface AllIconsPropsType {
    name: keyof typeof icons,
    className?: string
  }
  const AllIcons = ({ name, className = `` }: AllIconsPropsType) => {
    const Icon = icons[name];
  
    return <Icon className={className} />;
  };
  
  export default AllIcons;