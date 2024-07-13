import Link from "next/link";

function FooterSection() {
  return (
    <div className=" lg:mx-[150px] md:mx-[50px] border-t border-gray-200 m-auto mt-10 flex flex-col justify-between text-center py-5 md:flex-row ">
      <p className="text-sm text-gray-700">© 2024 Steamy Studio.</p>
      <div className="flex items-center justify-center md:justify-left md:mr-16 lg:mr-20">
        <Link href="/terms">
          <div className="text-sm text-gray-700">Terms of service</div>
        </Link>

        <Link href="/privacy">
          <div className="text-sm text-gray-700 ml-6">Privacy policy</div>
        </Link>
      </div>
    </div>
  );
}

export default FooterSection;
