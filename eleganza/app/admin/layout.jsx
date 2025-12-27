import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Eleganza. - Admin",
    description: "Eleganza. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
