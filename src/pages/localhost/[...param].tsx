import { useRouter } from 'next/router'

const Comment = () => {
    const router = useRouter()
    const slug = (router.query.param as string[]) || []

    return (
        <>
            <h1>Slug: {slug.join('/')}</h1>
        </>
    )
}

export default Comment