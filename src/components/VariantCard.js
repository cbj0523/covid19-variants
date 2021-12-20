const VariantCard = (props) => {
    const Alpha = props.imgComponent;
    
    return (
        <div style={{ paddingLeft: "2vw", paddingRight: "2vw"}}>
            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "2vw" }}>   
                <div className="variantSVG">
                    <Alpha style={{ width: "50vw"}} />
                </div>
                <div className="variantDesription" style={{ width: "40%", marginLeft: "1vw"}}>
                    <h1 style={{ fontSize: "1.25vw", marginBottom: "0.55vw"}} >{props.variantName}</h1>
                    <p style={{ lineHeight: "1.2vw", fontSize: "0.95vw"}}>
                        백신 회피 돌연 변이 : {props.variantInformation.evadeVaccine}
                    </p>
                    <p style={{ lineHeight: "1.2vw", fontSize: "0.95vw"}}>
                        전염성 : {props.variantInformation.contagionRate}
                    </p>
                    <p style={{ lineHeight: "1.2vw", fontSize: "0.95vw"}}>
                        치명률 : {props.variantInformation.modalityRate}
                    </p>
                    <p style={{ lineHeight: "1.2vw", fontSize: "0.95vw"}}>
                        주요 돌연변이 : {props.variantInformation.mutation}
                    </p>
                </div>
            </div>
            <hr style={{ marginTop: "2vw"}} />
        </div>
    )
}

export default VariantCard;