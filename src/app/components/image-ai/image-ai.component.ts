import { Component, OnInit } from '@angular/core';
import {ComputerVisionClient} from '@azure/cognitiveservices-computervision';
import { DetectedBrand, DetectedObject } from '@azure/cognitiveservices-computervision/esm/models';
import {ApiKeyCredentials} from '@azure/ms-rest-js';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import axios from 'axios';

@Component({
  selector: 'app-image-ai',
  templateUrl: './image-ai.component.html',
  styleUrls: ['./image-ai.component.css']
})
export class ImageAIComponent implements OnInit {
  imageDisplay!: string | '';
  image: FormData | undefined;
  objects!: DetectedObject[] | [];
  cloudinaryLink!: string | '';


  

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

baseURL = "https://chandlerlearning.cognitiveservices.azure.com/";
subscriptionKey = "this is your key";


computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({ inHeader: { "Ocp-Apim-Subscription-Key": this.subscriptionKey } }),
    this.baseURL
  );

  imageInput (event: any) {
    const formData = new FormData() 
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', "lmuttvty")
    this.image = formData
    const [file] = event.target.files
     
    this.imageDisplay = '' + this.sanitizeImage(URL.createObjectURL(file))
    console.log('***', this.image, this.imageDisplay)
}

// make this async
async uploading (image: any) {
    
    const result = await axios.post("https://api.cloudinary.com/v1_1/dhtzwjvo9/image/upload", image).then((response) => {
      return response.data.secure_url
    })
    this.cloudinaryLink = result
    this.objects = (await this.computerVisionClient.analyzeImage(result, {
        visualFeatures: ["Objects"]
    })).objects || [];
    console.log(this.objects)
     
}

async setDisplay () {
  await this.uploading(this.image)
}

sanitizeImage (img: string) {
  return this.sanitizer.bypassSecurityTrustResourceUrl(img)
}


}
