import { useRouter } from 'next/router'

function Post() {
    const router = useRouter()
    const { subdomain } = router.query

    return <p>Post: {subdomain}</p>
}

export default Post