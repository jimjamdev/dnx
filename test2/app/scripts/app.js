var App = Ember.Application.create({
    LOG_TRANSITION: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

// Routes
App.Router.map(function () {
    this.resource('thanks');

    this.resource('girls', function () {
        this.resource('girl', {path: '/:nickname'}, function () {
            this.route('thanks');
        });
    });
});


App.IndexRoute = Ember.Route.extend({
    beforeModel: function () {
        this.transitionTo('girls');
    }
});


App.GirlsRoute = Ember.Route.extend({
    model: function () {
        return App.Girl;
    },
    actions: {
        sendMessage: function () {
            if (!$("#message").val()) {
                alert("Please enter a message");
            }
            else {
                // Do post/ajax whatever, then...
                this.transitionTo('thanks');
            }
        }
    }
});

App.ThanksRoute = Ember.Route.extend({
    model: function () {
        return App.Girl;
    }
});


// Model
App.Girl = DS.Model.extend({
    nickname: DS.attr('string'),
    age: DS.attr('string'),
    city: DS.attr('string'),
    lookfor: DS.attr('string')
});


// Data
App.Girl = [
    {
        id: 1,
        nickname: 'Elodie',
        age: '28 ans',
        city: 'Bordeaux',
        lookfor: 'Amitié'
    },
    {
        id: 2,
        nickname: 'Maryline',
        age: '22 ans',
        city: 'Nantes',
        lookfor: 'Amour'
    },
    {
        id: 3,
        nickname: 'Sonia',
        age: '24 ans',
        city: 'Lille',
        lookfor: 'Amour'
    },
    {
        id: 4,
        nickname: 'Laurine',
        age: '21 ans',
        city: 'Amiens',
        lookfor: 'Amitié, Amour'
    },
    {
        id: 5,
        nickname: 'Audrey',
        age: '19 ans',
        city: 'Bobigny',
        lookfor: 'Amour, Amitié'
    },
    {
        id: 6,
        nickname: 'Nicole',
        age: '31 ans',
        city: 'Rouen',
        lookfor: 'Amour'
    },
    {
        id: 7,
        nickname: 'Alexandra',
        age: '28 ans',
        city: 'Bordeaux',
        lookfor: 'Amitié'
    },
    {
        id: 8,
        nickname: 'Laure',
        age: '28 ans',
        city: 'Bordeaux',
        lookfor: 'Amitié'
    }
];

// Components

App.OwlCarouselComponent = Ember.Component.extend({
    classNames: ['owl-carousel'],

    _initOwlCarousel: Ember.on('didInsertElement', function () {
        this.$().owlCarousel({
            margin: 30,
            loop: true,
            dots: false,
            responsive: {
                0: {
                    items: 2,
                    margin: 10,
                    dots: true
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 8
                }
            }
        });
    })

});

