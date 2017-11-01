/// <reference types="react"/>
/// <reference types="react-native"/>

import * as React from "react";
import { StyleProp, Image, ViewStyle, TextStyle, ImageStyle } from "react-native";

export var Router: RouterStatic;
export type Router = RouterStatic;

// Reducer
export var Reducer: any;
export type Reducer = any;

// Router
interface RouterProps extends React.Props<Router> {
    sceneStyle?: StyleProp<ViewStyle>;
    backAndroidHandler?: Function;
    createReducer?: Function;
    wrapBy?: Function;
}
interface RouterStatic extends React.ComponentClass<RouterProps> { }

// Scene
export var Scene: SceneStatic;
export type Scene = SceneStatic;
interface SceneProps extends React.Props<Scene> {
    key?: string;
    component?: React.ComponentType<any>
    back?: boolean;
    init?: boolean;
    clone?: boolean;
    contentComponent?: React.ComponentType<any>
    backButtonImage?: string;
    backButtonTintColor?: string;
    drawer?: boolean;
    failure?: Function | string;
    headerBackTitle?: string;
    headerMode?: HeaderModeType;
    hideNavBar?: boolean;
    hideTabBar?: boolean;
    hideBackImage?: boolean;
    initial?: boolean;
    leftButtonImage?: Image;
    modal?: boolean;
    navigationBarTitleImage?: Image;
    navigationBarTitleImageStyle?: StyleProp<ImageStyle>;
    navTransparent?: boolean;
    on?: Function | string;
    onEnter?: (props: any) => void;
    onExit?: (props: any) => void;
    onLeft?: (props: any) => void;
    onRight?: (props: any) => void;
    renderTitle?: React.ComponentType<any>
    renderLeftButton?: React.ComponentType<any>
    renderRightButton?: React.ComponentType<any>
    renderBackButton?: React.ComponentType<any>
    rightButtonImage?: Image;
    rightButtonTextStyle?: StyleProp<TextStyle>;
    success?: Function | string;
    tabs?: boolean;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    type?: ActionConstShort;
    [name: string]: any; // These are passed through to the scenes
}
interface TabSceneProps extends React.Props<Scene> {
    icon?: React.ComponentType<any>
    tabBarLabel?: string;
}
interface SceneStatic extends React.ComponentClass<SceneProps & TabsProps & TabSceneProps & DrawerProps & ModalProps> { }
export type HeaderModeType = "float" | "screen";

// Tabs
export var Tabs: TabsStatic;
export type Tabs = TabsStatic;
interface TabsProps extends React.Props<Tabs> {
    wrap?: boolean;
    activeBackgroundColor?: string;
    activeTintColor?: string;
    inactiveBackgroundColor?: string;
    inactiveTintColor?: string;
    labelStyle?: StyleProp<TextStyle>;
    lazy?: boolean;
    tabBarComponent?: React.ComponentType<any>
    tabBarPosition?: TabBarPositionType;
    tabBarStyle?: StyleProp<ViewStyle>;
    tabStyle?: StyleProp<ViewStyle>;
    showLabel?: boolean;
    swipeEnabled?: boolean;
    tabBarOnPress?: Function;
    backToInitial?: boolean;
}
interface TabsStatic extends React.ComponentClass<SceneProps & TabsProps> { }
export type TabBarPositionType = "top" | "bottom";

// Drawer
export var Drawer: DrawerStatic;
export type Drawer = DrawerStatic;
interface DrawerProps extends React.Props<Drawer> {
    drawerImage?: Image;
    drawerIcon?: React.ComponentType<any>
    drawerPosition?: DrawerPositionType;
}
interface DrawerStatic extends React.ComponentClass<SceneProps & DrawerProps> { }
export type DrawerPositionType = "right" | "left";

// Modal
export var Modal: ModalStatic;
export type Modal = ModalStatic;
interface ModalProps extends React.Props<Modal> { }
interface ModalStatic extends React.ComponentClass<SceneProps & ModalProps> { }

// Overlay
export var Overlay: OverlayStatic;
export type Overlay = OverlayStatic;
interface OverlayProps extends React.Props<Overlay> { }
interface OverlayStatic extends React.ComponentClass<SceneProps & OverlayProps> { }

// Lightbox
export var Lightbox : LightboxStatic;
export type Lightbox  = LightboxStatic;
interface LightboxProps extends React.Props<Modal> { }
interface LightboxStatic extends React.ComponentClass<LightboxProps> { }

// Stack
export var Stack: StackStatic;
export type Stack = StackStatic;
interface StackProps extends React.Props<Stack> {
    navigationBarStyle?: StyleProp<ViewStyle>;
}
interface StackStatic extends React.ComponentClass<StackProps> { }

export var Actions: ActionsStatic & ActionsGenericStatic;
export type Actions = ActionsStatic & ActionsGenericStatic;
interface ActionsStatic {
    currentScene: string;
    jump: (sceneKey: string, props?: any) => void;
    pop: () => void;
    popAndPush: (sceneKey: string, props?: any) => void;
    popTo: (sceneKey: string, props?: any) => void;
    push: (sceneKey: string, props?: any) => void;
    refresh: (props?: any) => void;
    replace: (sceneKey: string, props?: any) => void;
    reset: (sceneKey: string, props?: any) => void;
    drawerOpen?: () => void;
    drawerClose?: () => void;

}
interface ActionsGenericStatic {
    [key: string]: (props?: any) => void;
}

export type ActionConstShort = "jump" | "push" | "replace" | "pop" | "popTo" | "refresh" | "reset";
export declare const ActionConst: ActionConst;
export type ActionConst = {
    JUMP: string; PUSH: string; PUSH_OR_POP: string; REPLACE: string;
    BACK: string; BACK_ACTION: string; POP_TO: string; REFRESH: string;
    RESET: string; FOCUS: string; BLUR: string; ANDROID_BACK: string;
}
