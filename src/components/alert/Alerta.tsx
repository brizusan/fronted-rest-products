import { PropsWithChildren } from "react"


export const Alerta = ({ children  }: PropsWithChildren) => {
  return (
    <div className={`${children === 'Product created' ? 'text-green-500' : 'text-red-500'} text-center  uppercase font-bold text-sm rounded mt-5`}>
      {children}
    </div>
  );
};
