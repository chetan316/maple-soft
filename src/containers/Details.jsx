import React, { Component } from "react"
import { connect } from "react-redux"
import { dataActions } from "../redux/actions/data.actions"
import Services from "../components/services"
import Providers from "../components/providers"

class Details extends Component {
    state = {
        searchedProviderList: []
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        this.props.dispatch(dataActions())
    }

    getProviders = (providerName) => {
        const { providers } = this.props;

        let providerList = providers.filter(provider => (
            (provider.attributes.subspecialties).indexOf(providerName) > -1
        ))
        console.log(providerList)
        this.setState({
            searchedProviderList: providerList
        })
    }

    render() {
        const providersData = this.state.searchedProviderList && this.state.searchedProviderList.length > 0 ? (
            this.state.searchedProviderList.map(provider => (
                <Providers key={provider.id} providerId={provider.id}
                    name={provider.attributes.name}
                    imageUrl={provider.attributes["profile-image"]}
                    subSpecialities={provider.attributes.subspecialties} />
            ))
        ) :
            (this.props.providers && this.props.providers.data && this.props.providers.data.map(provider => (
                <Providers key={provider.id} providerId={provider.id}
                    name={provider.attributes.name}
                    imageUrl={provider.attributes["profile-image"]}
                    subSpecialities={provider.attributes.subspecialties} />
            )))
        return (
            <React.Fragment>
                <h3>Service List</h3>
                {this.props.services && this.props.services.map(service => (
                    <Services key={service.id} serviceId={service.id} name={service.attributes.name} getProviders={this.getProviders} />
                ))}

                <h3>Provider List</h3>
                {/* {this.props.providers && this.props.providers.map(provider => (
                    <Providers key={provider.id} providerId={provider.id}
                        name={provider.attributes.name}
                        imageUrl={provider.attributes["profile-image"]}
                        subSpecialities={provider.attributes.subspecialties} />
                ))
            } */}
                {providersData}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state)
    return {
        services: state.servicesData && state.servicesData,
        providers: state.povidersData && state.povidersData
    }
}

export default connect(mapStateToProps)(Details)