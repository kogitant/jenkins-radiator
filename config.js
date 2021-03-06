// Should point to the jenkins API json
// e.g. http://ci.example.com/api/json

var configs = [
    {
        ci_json_url:"https://builds.apache.org",
        refresh_interval: 24000,
        radiatorTitle: 'A few Apache jobs',
        excludeFilter: [],
        includeFilter: ["ActiveMQ","Apache Wicket 6.0.x","Commons"]
    },
    {
        ci_json_url:"https://builds.apache.org",
        refresh_interval: 24000,
        radiatorTitle: 'Only most likely passing Apache jobs',
        excludeFilter: [],
        includeFilter: ["Accumulo-1.3.x","Apache Wicket 1.4.x"]
    },
    {
        ci_json_url:"https://builds.apache.org",
        refresh_interval: 24000,
        radiatorTitle: 'All Apache jobs',
        excludeFilter: [],
        includeFilter: []
    },
    {
        ci_json_url:"http://www.ikasan.org/jenkins",
        refresh_interval: 24000,
        radiatorTitle: 'Ikasan',
        excludeFilter: [],
        includeFilter: []
    },
    {
        ci_json_url:"http://www.pinkhq.com/jenkins",
        refresh_interval: 24000,
        radiatorTitle: 'PinkHQ',
        excludeFilter: [],
        includeFilter: []
    }



];

// By default use first config.
// Url parameter config=1 can be used to select another, like this:
// jenkins-radiator/index.html?config=1
// defaults to 0, i.e. jenkins-radiator/index.html?config=0
var config = configs[0];

// Logging configuration, levels the same as Log4j has
var loggingConfig = {
    debug: false,
    info: true
}