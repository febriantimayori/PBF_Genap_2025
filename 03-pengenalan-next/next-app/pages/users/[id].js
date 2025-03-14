export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    const paths = users.map((user) => ({
        params: { id: `${user.id}` }, // Pastikan ID dalam bentuk string
    }));

    return { paths, fallback: false }; // Gunakan `fallback: false` agar hanya ID yang ada yang dibuat statis
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: { user },
    };
}

export default function UserDetail({ user }) {
    return (
        <div>
            <h1>Detail Pengguna</h1>
            <p><strong>Nama:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p> <br/>
            <a href="/users">Kembali</a>
        </div>
    );
}