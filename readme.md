## **API_TRACKER**

Testing utility for tracking api endpint changes.

| methods | args                                                               | remarks                                                                                                                                                                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| save    | [obj: deep[object]\, dir:string, indexing:number, filename:string] | **obj** can be manually added or used with deep function.<br />**dir** need to be specify inorder to store the api response.<br />**indexing** is for formatting. default 2.<br />**filename** can be specify manually but follow this format "index.filename.extension"; <br />default is auto generated |
| deep    | [obj: object]                                                      | this function is used to flattern the object to it's inner children.                                                                                                                                                                                                                                                               |
| read    | [dir:string, index1: number, index2:number]                        | **dir** need to be specify inorder to read the api response.<br />index1 & index2 is optional or can manually specify.                                                                                                                                                                                                       |

> example is inside index.js file
