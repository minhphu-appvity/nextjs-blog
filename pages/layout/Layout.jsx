import Head from 'next/Head'
import Navbar from './Navbar'
export default function Layout() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Anime79</title>
            </Head>
            <Navbar></Navbar>
        </div>
    )
}
