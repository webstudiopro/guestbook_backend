<?php
/**
 * Created by PhpStorm.
 * User: webstudiopro
 * Date: 5/4/17
 * Time: 6:49 PM
 */

namespace AppBundle\Controller;


use AppBundle\Entity\Comments;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;


class ApiController extends FOSRestController
{
    /**
     * @Rest\Get("/api/comments")
     */
    public function showAction(){
        $data = $this->getDoctrine()
            ->getRepository('AppBundle:Comments')
            ->findBy(array(), array('id' => 'DESC'));
        return $data;
    }

    /**
     * @Rest\Post("/api/new")
     */
    public function newAction(Request $request){
        $name = $request->get('name');
        $email = $request->get('email');
        $text = $request->get('comment');
        $facebook = $request->get('facebook');

        $comment = new Comments();
        $comment->setName($name);
        $comment->setEmail($email);
        $comment->setComment($text);
        $comment->setFacebook($facebook);
        $comment->setCreated(date('l jS \of F Y h:i:s A'));

        // validation
        $validator = $this->get('validator');
        $errors = $validator->validate($comment);
        $message = [
            'type'=>'success',
            'message'=>'Hartelijk dank voor het tekenen van mijn gastenboekje !!!'
        ];
        if(count($errors) == 0){
            $em = $this->getDoctrine()->getManager();
            $em->persist($comment);
            $em->flush();
        } else {
            $message = [
                'type'=>'error',
                'message'=>join(', ', $errors)
            ];
        }
        return new JsonResponse($message);
    }
}