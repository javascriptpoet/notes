#Keep importing as granular as possible
Files should be imported individually rather then in batches by dir wide index file
This makes rearranging file locations much easier and allows using IDE refactoring tools

Index files, still, are good to use for composable units like react or form components

#All imports should be at the highest possible scope of the file
The reason is at times a side effect needs to happen at the startup. All component should be imported by the router,
so most of the configuration tasks can be done locally as long as all files get pulled in. Again, if a require
needs to be done below top scope it should be done closer to surface.