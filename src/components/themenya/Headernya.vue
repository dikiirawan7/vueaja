<template>
    <div>
        <v-app>
            <v-toolbar dark color="primary">
                <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title class="white--text">Title</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>more_vert</v-icon>
                        </v-btn>
            </v-toolbar>
            
            <v-container grid-list-xl text-xs-center>
                
                <v-layout row wrap red>
                    <v-flex xs10 offset-xs1 >
                        <v-card dark color="green">
                             <v-card-text>xs10 offset-xs1</v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-layout row>
                <v-flex xs10 offset-xs1 >
                    <v-carousel >
                            <v-carousel-item>
                                <v-card>
                                <v-card-title>no</v-card-title>

                                <v-img :src="require('@/picture/opening_lauts.png')"></v-img>

                                <v-card-text>ini gambar</v-card-text>
                                </v-card>
                            </v-carousel-item>
                            <v-carousel-item>
                                    yes
                            </v-carousel-item>
                            
                    </v-carousel>

                    
                </v-flex>                
                </v-layout>
                <v-layout row wrap justify-space-between>
                    
                        <v-flex xs3>
                            <v-card dark color="primary">
                            <v-card-text>one</v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs2>
                            <v-card dark color="secondary">
                            <v-card-text>two</v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs3>
                            <v-card dark color="accent">
                            <v-card-text>three</v-card-text>
                            </v-card>
                        </v-flex>
                </v-layout>

                <v-layout >
                    <v-flex sm4 offset-sm0>
                    <v-card>
                        <v-card-media   >
                            <v-img :src="require('@/picture/opening_lauts.png')">
                            </v-img>
                        </v-card-media>
                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-flex>

                    <v-flex sm4 offset-sm0>
                    <v-card>
                        
                        <v-card-media v-bind:src="require('@/picture/opening_lauts.png')"  >
                        </v-card-media>
                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-flex>

                    <v-flex sm4 offset-sm0>
                    <v-card>
                        <v-card-media v-bind:src="require('@/picture/opening_lauts.png')"  >
                        </v-card-media>
                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-flex>
                </v-layout>


                
                
            </v-container>
        </v-app>

        <v-layout >
                        <v-flex xs10 offset-xs1>
                        <v-toolbar color="indigo" dark>
                            <v-toolbar-side-icon></v-toolbar-side-icon>
                            <v-toolbar-title>Discover</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                            <v-icon>search</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-card>
                            <v-container fluid grid-list-md>
                            <v-layout row wrap>
                                <v-flex
                                v-for="card in cards"
                                v-bind="{ [`xs${card.flex}`]: true }"
                                :key="card.title"
                                >
                                <v-card>
                                    <v-card-media
                                    :src="card.src"
                                    height="200px"
                                    >
                                    <v-container fill-height fluid>
                                        <v-layout fill-height>
                                        <v-flex xs12 align-end flexbox>
                                            <span class="headline white--text" v-text="card.title"></span>
                                        </v-flex>
                                        </v-layout>
                                    </v-container>
                                    </v-card-media>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon>favorite</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                        <v-icon>bookmark</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                        <v-icon>share</v-icon>
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-flex>
                            </v-layout>
                            </v-container>
                        </v-card>
                        </v-flex>
                    </v-layout>
                    <div class="text-xs-center">
                        <v-badge left>
                        <span slot="badge">6</span>
                        <v-icon large color="grey lighten-1">shopping_cart</v-icon>
                        </v-badge>

                        <v-badge color="red">
                        <span slot="badge">!</span>
                        <v-icon large color="grey">mail</v-icon>
                        </v-badge>
                    </div>

                    
                    
    </div>
    
</template>
<script>
export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: require('@/picture/opening_lauts.png'), flex: 12 },
        { title: 'Favorite road trips', src: require('@/picture/opening_lauts.png'), flex: 6 },
        { title: 'Best airlines', src: require('@/picture/opening_lauts.png'), flex: 6 }
      ]
    })
}
</script>

<style>
    
</style>


