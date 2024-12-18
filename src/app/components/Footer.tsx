export default function Footer() {
   const year = new Date().getFullYear;
   return (
      <footer className="relative">
         {/* START:Content */}
         <div className="container py-8 ">
            <p className="text-sm text-white/20">
               &copy; {Number(year)}. All right reserved
            </p>
         </div>
         {/* END:Content */}
         <span className="blob absolute top-[20%] right-0 w-1/4 h-4/6 blur-[100px] rotate-180 -z-10" />
         <Icon className="absolute h-6 w-6 -top-3 hidden lg:block lg:left-5 xl:left-7 text-white" />
         <Icon className="absolute h-6 w-6 -top-3 hidden lg:block lg:right-5 xl:right-7 text-white" />
         <div className="border-left"></div>
         <div className="border-right"></div>
         <div className="border-top"></div>
      </footer>
   );
}
export const Icon = ({ className }: { className: string }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth="1.5"
         stroke="currentColor"
         className={className}
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
         />
      </svg>
   );
};
