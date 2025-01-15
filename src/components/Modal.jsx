import { cn } from "@/utils/cn";
import { icons } from "./Icons";

export const Modal = ({
    open,
    setOpen,
    title,
    children,
    isClosable = true,
    className,
}) => {
    return (
        <div
            className={cn(
                "fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-[200]",
                {
                    "opacity-0 invisible": !open,
                }
            )}
        >
            <div
                className={
                    "w-full p-4 h-full flex items-center flex-wrap mx-auto"
                }
            >
                <div
                    className={cn(
                        "w-full bg-white max-w-[674px] mx-auto p-6 rounded-2xl",
                        className
                    )}
                >
                    {title && (
                        <h4 className='text-md font-semibold flex items-center mb-6'>
                            <span className='w-0 flex-grow'>{title}</span>
                            {isClosable && (
                                <button
                                    type='button'
                                    className=''
                                    onClick={() => setOpen(false)}
                                >
                                    {icons.close}
                                </button>
                            )}
                        </h4>
                    )}
                    <div className='max-h-[80vh] overflow-y-auto'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
