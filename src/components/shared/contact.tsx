import { memo } from "react"
import { Container } from "."

const _ContactTab = () => {
    return (
        <Container className={`w-full bg-red-900 px-10 py-14 grid grid-cols-1 md:grid-cols-2`}>
            <Container className=" flex flex-col gap-7 pb-1 mb-4 md:mb-0 md:pb-0 border-r-0 border-b-2 md:border-b-0 md:border-r-2 border-white">
                <Container as='h5' className=" text-white font-bold text-xl">Address</Container>
                <Container className=" flex flex-col gap-6 mt-0 md:mt-4">
                    <Container as='h5' className=" text-white font-bold">Portharcourt office: <Container className=" font-medium">No 18 Ezimgbu link Road GRA, Phase 4

                        Port Harcourt, Rivers State,

                        Nigeria.</Container> </Container>
                    <Container as='h5' className=" text-white font-bold">Ibadan office: <Container className=" font-medium">No 18 Ezimgbu link Road GRA, Phase 4

                        Port Harcourt, Rivers State,

                        Nigeria.</Container> </Container>
                </Container>

            </Container>
            <Container className=" flex flex-col gap-7 pl-0 md:pl-10">
                <Container as='h5' className=" text-white font-bold text-xl">Contact</Container>
                <Container className=" flex flex-col gap-6 mt-0 md:mt-4">
                    <Container as='h5' className=" text-white font-bold">Portharcourt office: <Container className=" font-medium">070328803467</Container> </Container>
                    <Container as='h5' className=" text-white font-bold">Ibadan office: <Container className=" font-medium">090328890768</Container> </Container>
                </Container>

            </Container>
        </Container>
    )
}

export const ContactTab = memo(_ContactTab)