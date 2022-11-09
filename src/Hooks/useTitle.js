import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Electrical Solution`;
    }, [title])
}

export default useTitle;