import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <img className="w-52 mb-5"src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />
                <div>
                    <button className="bg-[#18D860] text-white p-5 rounded-full"
                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}>Login with Google
                    </button>

                </div>

        </div>
    );
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
}