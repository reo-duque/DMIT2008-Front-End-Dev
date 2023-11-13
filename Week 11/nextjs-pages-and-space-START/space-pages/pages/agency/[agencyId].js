import { useState,  useEffect } from "react"
import { useRouter } from "next/router"
import { getAgency } from "@utils/api/agencies"
import { getSpaceCraft } from "@utils/api/spaceCraft"
import NavBar from "@components/NavBar"
import SimpleDetailsCard from "@components/SimpleDetailsCard"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"



export default function Agency() {
    const [agencyDetails, setAgencyDetails] = useState()
    //define my router
    const router = useRouter()

    //let's explore what is going here
    console.log(router)

    //deconstruct the router.query
    const {agencyId} = router.query
    //note: our file name is [agencyId].js
    //use the agency id when it's mounted
    useEffect(() => {
        if (!agencyId) {return} //just in case it's undefined
        loadAgencyData()
    }, [agencyId])
    
    //get the agency data
    const loadAgencyData = async () => {
        const details = await getAgency(agencyId)
        //set our state here
        setAgencyDetails(details)

    }
    
    const goToSpaceCraft = (spaceId) => {
        router.push(`/spacecraft/${spaceId}`)
    }
    //if our agencyDetails is empty, return early with this loading screen
    if (!agencyDetails) {
        return <div>Loading...</div>
    }

    //below should be rendered only if there's data
    return <>
        <NavBar />
        <Container>
            <Grid container sx={{ marginTop: '1rem' }}>
                <Grid Item xs={2}>
                    <img 
                        src={agencyDetails.logo_url}
                        style={{
                            width: '120px'
                        }}
                    />
                </Grid>
                <Grid Item xs={10}>
                    <Typography variant="h3">
                        {agencyDetails.name}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5">
                        Launch Details
                    </Typography>
                    <SimpleDetailsCard 
                        title = {"Total Launches"}
                        description = {agencyDetails.total_launch_count}
                    />
                    <SimpleDetailsCard 
                        title = {"Successful Launches"}
                        description = {agencyDetails.successful_launches}
                        subDescription={`Successful landings ${agencyDetails.successful_landings}`}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5">
                        Agency Information
                    </Typography>
                    <SimpleDetailsCard 
                        title={"Administrator"}
                        description={agencyDetails.administrator}
                    />
                    <SimpleDetailsCard 
                        title={"About the Agency"}
                        description={`Founded: ${agencyDetails.founding_year}`}
                        subDescription={agencyDetails.description}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5">
                        Spacecrafts
                    </Typography>
                    {agencyDetails.spacecraft_list.map((spacecraft) => {
                        return <SimpleDetailsCard 
                            key={spacecraft.id}
                            description={spacecraft.name}
                            buttonName={"Go to spacecraft page."}
                            buttonCallback={() => {
                                goToSpaceCraft(spacecraft.id)
                            }}
                        />
                    })}
                </Grid>
            </Grid>
        </Container>
    
    </>
}