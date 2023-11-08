import { useEffect } from "react"
import { useRouter } from "next/router"
import { getAgency } from "@utils/api/agencies"
export default function Agency() {
    //define my router
    const router = useRouter()

    //let's explore what is going here
    console.log(router)

    //deconstruct the router.query
    const {agencyId} = router.query
    //note: our file name is [agencyId].js
    //use the agency id when it's mounted
    useEffect(() => {
        loadAgencyData()
    }, [agencyId])
    
    //get the agency data
    const loadAgencyData = async () => {
        const details = await getAgency(agencyId)
        console.log(details)

    } 
    //load it on the page
    return <div>
        Nothing in it.
    </div>
}