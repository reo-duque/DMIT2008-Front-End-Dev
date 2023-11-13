import { useState,  useEffect } from "react"
import { useRouter } from "next/router"
import { getAgency } from "@utils/api/agencies"
import { getSpaceCraft } from "@utils/api/spaceCraft"
import NavBar from "@components/NavBar"
import SimpleDetailsCard from "@components/SimpleDetailsCard"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"


export default function Spacecraft() {
    const [spaceCraft, setSpaceCraft] = useState()

    //define my router
    const router = useRouter()

    //let's explore what is going here
    console.log(router)

    //deconstruct the router.query
    const {spacecraft} = router.query
    //note: our file name is [agencyId].js
    //use the agency id when it's mounted
    useEffect(() => {
        //if (!agencyId) {return} //just in case it's undefined
        loadSpaceData()
    }, [spacecraft])

    const loadSpaceData = async () => {
        const details = await getSpaceCraft(spacecraft)
        
        //set our state here
        setSpaceCraft(details)
    }
    
    return <>
        <NavBar /> 
        <Grid container sx={{marginTop: '1rem'}}>
            <Grid item xs={4}>
                <Typography variant="h5" sx={{margin: '1rem'}}>
                    Spacecraft: {spaceCraft.name}
                </Typography>
                <SimpleDetailsCard
                    description={spaceCraft.details}
                />
            </Grid>
        </Grid>
     
    </>

}
