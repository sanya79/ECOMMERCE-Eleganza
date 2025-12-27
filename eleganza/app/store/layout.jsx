import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Eleganza. - Store Dashboard",
    description: "Eleganza. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
