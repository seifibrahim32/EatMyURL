import 'dart:io';

import 'package:eat_my_url/Pages/splash.dart';
import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';

import 'package:window_size/window_size.dart';
void main() {
  WidgetsFlutterBinding.ensureInitialized();
  if(Platform.isWindows){
    setWindowMinSize(const Size(811, 511));
    setWindowMaxSize(const Size(1381, 180));
    setWindowTitle("Eat My URL");

  }
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    setWindowMaxSize(const Size(1381, 180));
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Eat My URL',
      theme: ThemeData(
        primarySwatch: Colors.orange,
      ),
      home: ScreenTypeLayout(
          mobile: Splash(isDesktop:false),
         desktop: Splash(isDesktop:true),
        breakpoints: ScreenBreakpoints(
          desktop: 0,
          watch: 12,
          tablet: 110
        ),

      ),
    );
  }
}
